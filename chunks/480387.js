n.d(t, {
    HJ: () => h,
    Zd: () => m,
    yD: () => _
});
var i = n(213919),
    r = n(544891),
    a = n(570140),
    l = n(893776),
    s = n(710845),
    o = n(314897),
    c = n(726745),
    d = n(981631);
let u = new s.Z('MultiAccountActionCreators');
function h() {
    let e = o.default.getId();
    c.Z.getUsers().forEach(async (t) => {
        let n,
            { id: l } = t,
            s = i.getToken(l);
        if (null == s || '' === s) {
            a.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
                userId: l
            });
            return;
        }
        a.Z.dispatch({
            type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST',
            userId: l
        });
        try {
            n = await r.tn.get({
                url: d.ANM.ME,
                headers: { authorization: s },
                retries: 3,
                rejectWithError: !1
            });
        } catch (t) {
            let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
            a.Z.dispatch({
                type: e ? 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE' : 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: l
            });
            return;
        }
        a.Z.dispatch({
            type: e === l ? 'CURRENT_USER_UPDATE' : 'USER_UPDATE',
            user: n.body
        }),
            a.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: l
            });
    });
}
function _(e, t) {
    u.log('Switching account to '.concat(e), { switchSynchronously: t });
    let n = i.getToken(e);
    return null == n
        ? (u.log('Switching accounts failed because there was no token'),
          a.Z.dispatch({
              type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
              userId: e
          }),
          Promise.resolve())
        : l.Z.switchAccountToken(n, t);
}
function m(e) {
    a.Z.dispatch({
        type: 'MULTI_ACCOUNT_REMOVE_ACCOUNT',
        userId: e
    });
}
