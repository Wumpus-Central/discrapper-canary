n.d(t, {
    A: () => b,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(397927),
    s = n(976860),
    c = n(961350),
    o = n(449054),
    d = n(412461),
    u = n(933171),
    p = n(652215),
    h = n(985018);
let m = "redirect_to_support_server";

function b(e) {
    var t;
    let n,
        b,
        f,
        { application: g, className: x } = e,
        { onGoToSupportServer: v } =
            ((t = g),
            (n = (0, d.DB)()),
            (b = (0, r.bG)([c.default], () => c.default.getSessionId())),
            (f = a.useCallback(async () => {
                try {
                    var e;
                    let n = null == t || null == (e = t.guild) ? void 0 : e.id;
                    if (null != n) {
                        (0, d.TR)(p.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                            application_id: t.id,
                            support_guild_id: n,
                        });
                        let e = {
                            page: p.liQ.APPLICATION_DIRECTORY,
                        };
                        await (0, o.Z2)(n, e);
                    }
                } catch (e) {}
            }, [t])),
            a.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && n && null != b && "true" === e.searchParams.get(m)) {
                    e.searchParams.delete(m);
                    let t = e.pathname + e.search;
                    (0, s.bG)(t), f();
                }
            }, [n, f, b, t]),
            {
                onGoToSupportServer: a.useCallback(() => {
                    var e;
                    null != (null == t || null == (e = t.guild) ? void 0 : e.id) &&
                        (n
                            ? f()
                            : (0, d.jL)({
                                  [m]: "true",
                              }));
                }, [t, f, n]),
            });
    return null != g.guild && g.guild.features.includes(p.GuildFeatures.DISCOVERABLE)
        ? (0, l.jsxs)("div", {
              className: x,
              children: [
                  (0, l.jsx)(i.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: h.intl.string(h.t.KJEO27),
                  }),
                  (0, l.jsx)(u.A, {
                      guild: g.guild,
                      onClick: v,
                  }),
              ],
          })
        : null;
}
