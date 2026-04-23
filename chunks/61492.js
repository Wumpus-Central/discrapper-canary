e.d(a, { default: () => u });
var i = e(627968),
    n = e(64700),
    l = e(189213),
    r = e(292666),
    s = e(573648),
    o = e(652215),
    c = e(738104),
    d = e(985018);
function u(t) {
    let { onClose: a, transitionState: e, location: u, successRedirect: g, platformType: h } = t,
        [m, p] = n.useState(""),
        [b, f] = n.useState(null),
        [S, k] = n.useState(!1),
        x = s.A.get(h)?.name ?? d.intl.string(d.t["bU/GZm"]),
        y = async () => {
            k(!0), f(null);
            try {
                let t = await (0, c.d)(h, { location: u, successRedirect: g, handle: m });
                if (null == t) throw Error();
                a();
            } catch {
                f(d.intl.string(d.t["7wbPNl"])), k(!1);
            }
        },
        C =
            h === o.fg2.MASTODON
                ? "@example@mastodon.social"
                : h === o.fg2.BLUESKY
                  ? "example.bsky.social"
                  : "clyde@example.com",
        T =
            (h === o.fg2.MASTODON && /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(m),
            /^.+\.[^.@]{2,}$/.test(m));
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        title: d.intl.formatToPlainString(d.t["ImMhq+"], { serviceName: x }),
        subtitle: d.intl.formatToPlainString(d.t["7TByKh"], { serviceName: x }),
        onClose: a,
        actions: [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: a },
            { variant: "primary", text: d.intl.string(d.t.PDTjLN), onClick: y, loading: S, disabled: !T },
        ],
        children: (0, i.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), T && !S && y();
            },
            children: (0, i.jsx)(r.k, {
                label: d.intl.string(d.t.tZ9QFR),
                error: b,
                onChange: p,
                placeholder: C,
                value: m,
                disabled: S,
                autoFocus: !0,
            }),
        }),
    });
}
