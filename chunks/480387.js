n.d(t, {
    HJ: () => m,
    Zd: () => p,
    yD: () => g
});
var r = n(213919),
    i = n(544891),
    s = n(570140),
    a = n(893776),
    l = n(710845),
    o = n(314897),
    c = n(726745),
    d = n(981631);
let u = new l.Z('MultiAccountActionCreators');
function m() {
    let e = o.default.getId();
    c.Z.getUsers().forEach(async (t) => {
        let n,
            { id: a } = t,
            l = r.getToken(a);
        if (null == l || '' === l)
            return void s.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
                userId: a
            });
        s.Z.dispatch({
            type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST',
            userId: a
        });
        try {
            n = await i.tn.get({
                url: d.ANM.ME,
                headers: { authorization: l },
                retries: 3,
                rejectWithError: !1
            });
        } catch (t) {
            let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
            s.Z.dispatch({
                type: e ? 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE' : 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: a
            });
            return;
        }
        s.Z.dispatch({
            type: e === a ? 'CURRENT_USER_UPDATE' : 'USER_UPDATE',
            user: n.body
        }),
            s.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: a
            });
    });
}
function g(e, t) {
    u.log('Switching account to '.concat(e), { switchSynchronously: t });
    let n = r.getToken(e);
    return null == n
        ? (u.log('Switching accounts failed because there was no token'),
          s.Z.dispatch({
              type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
              userId: e
          }),
          Promise.resolve())
        : a.Z.switchAccountToken(n, t);
}
function p(e) {
    s.Z.dispatch({
        type: 'MULTI_ACCOUNT_REMOVE_ACCOUNT',
        userId: e
    });
}
