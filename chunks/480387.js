n.d(t, {
    HJ: () => h,
    Zd: () => g,
    yD: () => _
});
var i = n(213919),
    r = n(544891),
    l = n(570140),
    a = n(893776),
    o = n(710845),
    s = n(314897),
    c = n(726745),
    d = n(981631);
let u = new o.Z('MultiAccountActionCreators');
function h() {
    let e = s.default.getId();
    c.Z.getUsers().forEach(async (t) => {
        let n,
            { id: a } = t,
            o = i.getToken(a);
        if (null == o || '' === o) {
            l.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
                userId: a
            });
            return;
        }
        l.Z.dispatch({
            type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST',
            userId: a
        });
        try {
            n = await r.tn.get({
                url: d.ANM.ME,
                headers: { authorization: o },
                retries: 3,
                rejectWithError: !1
            });
        } catch (t) {
            let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
            l.Z.dispatch({
                type: e ? 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE' : 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: a
            });
            return;
        }
        l.Z.dispatch({
            type: e === a ? 'CURRENT_USER_UPDATE' : 'USER_UPDATE',
            user: n.body
        }),
            l.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: a
            });
    });
}
function _(e, t) {
    u.log('Switching account to '.concat(e), { switchSynchronously: t });
    let n = i.getToken(e);
    return null == n
        ? (u.log('Switching accounts failed because there was no token'),
          l.Z.dispatch({
              type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
              userId: e
          }),
          Promise.resolve())
        : a.Z.switchAccountToken(n, t);
}
function g(e) {
    l.Z.dispatch({
        type: 'MULTI_ACCOUNT_REMOVE_ACCOUNT',
        userId: e
    });
}
