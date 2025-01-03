t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(315314),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var a = t(200651),
    i = t(192379),
    r = t(442837),
    l = t(481060),
    o = t(214912),
    s = t(703656),
    c = t(314897),
    d = t(900849),
    u = t(881294),
    m = t(981631),
    p = t(388032);
let _ = 'redirect_to_support_server';
function g(e) {
    let { application: n, className: t } = e,
        { onGoToSupportServer: g } = (function (e) {
            let n = (0, u.nu)(),
                t = (0, r.e7)([c.default], () => c.default.getSessionId()),
                a = i.useCallback(async () => {
                    try {
                        var n;
                        let t = null == e ? void 0 : null === (n = e.guild) || void 0 === n ? void 0 : n.id;
                        if (null != t) {
                            (0, u.zZ)(m.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                                application_id: e.id,
                                support_guild_id: t
                            });
                            let n = { page: m.ZY5.APPLICATION_DIRECTORY };
                            await (0, d.Ub)(t, n, { setsHistorySnapshot: !1 });
                        }
                    } catch {}
                }, [e]);
            return (
                i.useEffect(() => {
                    let i = new URL(location.href);
                    if (null != e && n && null != t && 'true' === i.searchParams.get(_)) {
                        i.searchParams.delete(_);
                        let e = i.pathname + i.search;
                        (0, s.dL)(e), a();
                    }
                }, [n, a, t, e]),
                {
                    onGoToSupportServer: i.useCallback(() => {
                        var t;
                        null != (null == e ? void 0 : null === (t = e.guild) || void 0 === t ? void 0 : t.id) && (n ? a() : (0, u.rf)({ [_]: 'true' }));
                    }, [e, a, n])
                }
            );
        })(n);
    return null != n.guild && n.guild.features.includes(m.oNc.DISCOVERABLE)
        ? (0, a.jsxs)('div', {
              className: t,
              children: [
                  (0, a.jsx)(l.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: p.intl.string(p.t.KJEO29)
                  }),
                  (0, a.jsx)(o.Z, {
                      guild: n.guild,
                      onClick: g
                  })
              ]
          })
        : null;
}
