n.d(t, {
    T: () => d,
    Z: () => p
});
var r = n(570140),
    i = n(447543),
    l = n(703656),
    a = n(314897),
    o = n(998502),
    s = n(996106),
    c = n(186901),
    u = n(981631);
async function d(e, t) {
    let { invite: n } = await i.ZP.resolveInvite(e, t);
    if (null == n) throw new s.Z({ errorCode: u.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(e));
    return (
        a.default.isAuthenticated()
            ? r.Z.dispatch({
                  type: 'INVITE_MODAL_OPEN',
                  invite: n,
                  code: e,
                  context: u.IlC.APP
              })
            : (0, l.dL)(u.Z5c.INVITE(e)),
        o.ZP.focus(),
        {
            invite: n,
            code: e
        }
    );
}
let p = {
    [u.Etm.OPEN_INVITE]: {
        scope: c.lH,
        async handler(e) {
            let {
                args: { code: t }
            } = e;
            await d(t, 'RPC OPEN_INVITE Handler');
        }
    }
};
