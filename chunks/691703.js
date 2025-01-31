n.d(t, { Z: () => g }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    l = n(481060),
    s = n(214912),
    o = n(703656),
    c = n(314897),
    d = n(900849),
    u = n(881294),
    m = n(981631),
    h = n(388032);
let p = 'redirect_to_support_server';
function g(e) {
    let { application: t, className: n } = e,
        { onGoToSupportServer: g } = (function (e) {
            let t = (0, u.nu)(),
                n = (0, r.e7)([c.default], () => c.default.getSessionId()),
                i = a.useCallback(async () => {
                    try {
                        var t;
                        let n = null == e ? void 0 : null === (t = e.guild) || void 0 === t ? void 0 : t.id;
                        if (null != n) {
                            (0, u.zZ)(m.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                                application_id: e.id,
                                support_guild_id: n
                            });
                            let t = { page: m.ZY5.APPLICATION_DIRECTORY };
                            await (0, d.Ub)(n, t, { setsHistorySnapshot: !1 });
                        }
                    } catch {}
                }, [e]);
            return (
                a.useEffect(() => {
                    let a = new URL(location.href);
                    if (null != e && t && null != n && 'true' === a.searchParams.get(p)) {
                        a.searchParams.delete(p);
                        let e = a.pathname + a.search;
                        (0, o.dL)(e), i();
                    }
                }, [t, i, n, e]),
                {
                    onGoToSupportServer: a.useCallback(() => {
                        var n;
                        null != (null == e ? void 0 : null === (n = e.guild) || void 0 === n ? void 0 : n.id) && (t ? i() : (0, u.rf)({ [p]: 'true' }));
                    }, [e, i, t])
                }
            );
        })(t);
    return null != t.guild && t.guild.features.includes(m.oNc.DISCOVERABLE)
        ? (0, i.jsxs)('div', {
              className: n,
              children: [
                  (0, i.jsx)(l.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: h.intl.string(h.t.KJEO29)
                  }),
                  (0, i.jsx)(s.Z, {
                      guild: t.guild,
                      onClick: g
                  })
              ]
          })
        : null;
}
