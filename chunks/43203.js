n.d(t, {
    $: () => d,
    A: () => p,
});
var r = n(73153),
    i = n(846293),
    l = n(976860),
    a = n(961350),
    s = n(837921),
    o = n(636401),
    c = n(613057),
    u = n(652215);
async function d(e, t) {
    let { invite: n } = await i.Ay.resolveInvite(e, t);
    if (null == n)
        throw new o.A(
            {
                errorCode: u.Lw6.INVALID_INVITE,
            },
            "Invalid invite id: ".concat(e),
        );
    return (
        a.default.isAuthenticated()
            ? r.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: n,
                  code: e,
                  context: u.BRT.APP,
              })
            : (0, l.bG)(u.BVt.INVITE(e)),
        s.Ay.focus(),
        {
            invite: n,
            code: e,
        }
    );
}
let p = {
    [u.e$_.OPEN_INVITE]: {
        scope: c.hj,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            await d(t, "RPC OPEN_INVITE Handler");
        },
    },
};
