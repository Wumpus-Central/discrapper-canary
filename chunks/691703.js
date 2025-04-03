n.d(t, { Z: () => g }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    l = n(481060),
    o = n(703656),
    s = n(314897),
    c = n(900849),
    d = n(881294),
    u = n(949507),
    p = n(981631),
    m = n(388032);
let h = 'redirect_to_support_server';
function g(e) {
    let { application: t, className: n } = e,
        { onGoToSupportServer: g } = (function (e) {
            let t = (0, d.nu)(),
                n = (0, i.e7)([s.default], () => s.default.getSessionId()),
                r = a.useCallback(async () => {
                    try {
                        var t;
                        let n = null == e || null == (t = e.guild) ? void 0 : t.id;
                        if (null != n) {
                            (0, d.zZ)(p.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                                application_id: e.id,
                                support_guild_id: n
                            });
                            let t = { page: p.ZY5.APPLICATION_DIRECTORY };
                            await (0, c.Ub)(n, t);
                        }
                    } catch (e) {}
                }, [e]);
            return (
                a.useEffect(() => {
                    let a = new URL(location.href);
                    if (null != e && t && null != n && 'true' === a.searchParams.get(h)) {
                        a.searchParams.delete(h);
                        let e = a.pathname + a.search;
                        (0, o.dL)(e), r();
                    }
                }, [t, r, n, e]),
                {
                    onGoToSupportServer: a.useCallback(() => {
                        var n;
                        null != (null == e || null == (n = e.guild) ? void 0 : n.id) && (t ? r() : (0, d.rf)({ [h]: 'true' }));
                    }, [e, r, t])
                }
            );
        })(t);
    return null != t.guild && t.guild.features.includes(p.oNc.DISCOVERABLE)
        ? (0, r.jsxs)('div', {
              className: n,
              children: [
                  (0, r.jsx)(l.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: m.NW.string(m.t.KJEO29)
                  }),
                  (0, r.jsx)(u.Z, {
                      guild: t.guild,
                      onClick: g
                  })
              ]
          })
        : null;
}
