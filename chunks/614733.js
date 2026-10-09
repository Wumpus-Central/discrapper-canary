n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    a = n(17928),
    r = n(97808),
    u = n(778712),
    s = n(290863),
    o = n(351906),
    d = n(695184),
    c = n(562153),
    f = n(427262),
    p = n(644968);
let h = { keys: ["label", "description"] };
function m(e) {
    let t = (0, a.bG)([o.A], () => o.A.hidePersonalInformation),
        n = (0, p.B)(e),
        m = (0, a.cf)([s.A], () => Object.fromEntries(n.map((e) => [e.id, s.A.getStatus(e.id)])), [n]),
        g = i.useMemo(
            () =>
                n.map((n) => ({
                    id: n.id,
                    value: n.id,
                    label: (0, c.mG)(e, null, n),
                    leading: (0, l.jsx)(r.eu, {
                        size: u._3.SIZE_24,
                        src: n.getAvatarURL(e, 24),
                        "aria-hidden": !0,
                        status: m[n.id],
                    }),
                    description: `${(0, f.QV)(n, { mode: "username", identifiable: t ? "never" : "always" })}${!t && !n.hasUniqueUsername() ? `#${n.discriminator}` : ""}`,
                })),
            [e, t, m, n],
        );
    return (
        i.useEffect(() => {
            null != e && d.A.requestMembers(e, "", 25);
        }, [e]),
        {
            options: g,
            onQueryChange: i.useCallback(
                (t) => {
                    let n = t.currentTarget.value.trim();
                    null != e && "" !== n && d.A.requestMembers(e, n, 25);
                },
                [e],
            ),
            matchSorterOptions: h,
        }
    );
}
