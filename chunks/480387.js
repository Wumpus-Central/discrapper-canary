n.d(e, {
    HJ: function () {
        return E;
    },
    Zd: function () {
        return f;
    },
    yD: function () {
        return d;
    }
});
var r = n(213919),
    i = n(544891),
    l = n(570140),
    u = n(893776),
    o = n(710845),
    a = n(314897),
    c = n(726745),
    s = n(981631);
let _ = new o.Z('MultiAccountActionCreators');
function E() {
    let t = a.default.getId();
    c.Z.getUsers().forEach(async (e) => {
        let n,
            { id: u } = e,
            o = r.getToken(u);
        if (null == o || '' === o) {
            l.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
                userId: u
            });
            return;
        }
        l.Z.dispatch({
            type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST',
            userId: u
        });
        try {
            n = await i.tn.get({
                url: s.ANM.ME,
                headers: { authorization: o },
                retries: 3,
                rejectWithError: !1
            });
        } catch (e) {
            let t = (null == e ? void 0 : e.status) === 401 || (null == e ? void 0 : e.status) === 403;
            l.Z.dispatch({
                type: t ? 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE' : 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: u
            });
            return;
        }
        l.Z.dispatch({
            type: t === u ? 'CURRENT_USER_UPDATE' : 'USER_UPDATE',
            user: n.body
        }),
            l.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: u
            });
    });
}
function d(t, e) {
    _.log('Switching account to '.concat(t), { switchSynchronously: e });
    let n = r.getToken(t);
    return null == n
        ? (_.log('Switching accounts failed because there was no token'),
          l.Z.dispatch({
              type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
              userId: t
          }),
          Promise.resolve())
        : u.Z.switchAccountToken(n, e);
}
function f(t) {
    l.Z.dispatch({
        type: 'MULTI_ACCOUNT_REMOVE_ACCOUNT',
        userId: t
    });
}
