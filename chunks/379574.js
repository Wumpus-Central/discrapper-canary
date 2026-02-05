a.d(t, { A: () => _ }), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    s = a(311907),
    l = a(397927),
    r = a(976860),
    o = a(961350),
    c = a(449054),
    d = a(412461),
    u = a(933171),
    h = a(652215),
    m = a(985018);
let p = "redirect_to_support_server";
function _(e) {
    var t;
    let a,
        _,
        g,
        { application: x, className: A } = e,
        { onGoToSupportServer: C } =
            ((t = x),
            (a = (0, d.DB)()),
            (_ = (0, s.bG)([o.default], () => o.default.getSessionId())),
            (g = i.useCallback(async () => {
                try {
                    let e = t?.guild?.id;
                    if (null != e) {
                        (0, d.TR)(h.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                            application_id: t.id,
                            support_guild_id: e,
                        });
                        let a = { page: h.liQ.APPLICATION_DIRECTORY };
                        await (0, c.Z2)(e, a);
                    }
                } catch {}
            }, [t])),
            i.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && a && null != _ && "true" === e.searchParams.get(p)) {
                    e.searchParams.delete(p);
                    let t = e.pathname + e.search;
                    (0, r.bG)(t), g();
                }
            }, [a, g, _, t]),
            {
                onGoToSupportServer: i.useCallback(() => {
                    null != t?.guild?.id && (a ? g() : (0, d.jL)({ [p]: "true" }));
                }, [t, g, a]),
            });
    return null != x.guild && x.guild.features.includes(h.GuildFeatures.DISCOVERABLE)
        ? (0, n.jsxs)("div", {
              className: A,
              children: [
                  (0, n.jsx)(l.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: m.intl.string(m.t.KJEO27),
                  }),
                  (0, n.jsx)(u.A, { guild: x.guild, onClick: C }),
              ],
          })
        : null;
}
