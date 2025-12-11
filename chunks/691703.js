n.d(t, { Z: () => f }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(481060),
    s = n(703656),
    o = n(314897),
    c = n(900849),
    d = n(881294),
    u = n(949507),
    p = n(981631),
    m = n(388032);
let h = "redirect_to_support_server";
function f(e) {
    let { application: t, className: n } = e,
        { onGoToSupportServer: f } = (function (e) {
            let t = (0, d.nu)(),
                n = (0, i.e7)([o.default], () => o.default.getSessionId()),
                a = r.useCallback(async () => {
                    try {
                        var t;
                        let n = null == e || null == (t = e.guild) ? void 0 : t.id;
                        if (null != n) {
                            (0, d.zZ)(p.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                                application_id: e.id,
                                support_guild_id: n,
                            });
                            let t = { page: p.ZY5.APPLICATION_DIRECTORY };
                            await (0, c.Ub)(n, t);
                        }
                    } catch (e) {}
                }, [e]);
            return (
                r.useEffect(() => {
                    let r = new URL(location.href);
                    if (null != e && t && null != n && "true" === r.searchParams.get(h)) {
                        r.searchParams.delete(h);
                        let e = r.pathname + r.search;
                        (0, s.dL)(e), a();
                    }
                }, [t, a, n, e]),
                {
                    onGoToSupportServer: r.useCallback(() => {
                        var n;
                        null != (null == e || null == (n = e.guild) ? void 0 : n.id) &&
                            (t ? a() : (0, d.rf)({ [h]: "true" }));
                    }, [e, a, t]),
                }
            );
        })(t);
    return null != t.guild && t.guild.features.includes(p.GuildFeatures.DISCOVERABLE)
        ? (0, a.jsxs)("div", {
              className: n,
              children: [
                  (0, a.jsx)(l.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: m.intl.string(m.t.KJEO27),
                  }),
                  (0, a.jsx)(u.Z, {
                      guild: t.guild,
                      onClick: f,
                  }),
              ],
          })
        : null;
}
