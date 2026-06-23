e.d(a, { default: () => d });
var n = e(627968),
    i = e(64700),
    l = e(189213),
    r = e(292666),
    s = e(573648),
    o = e(652215),
    c = e(738104),
    u = e(375708);
function d(t) {
    let { onClose: a, transitionState: e, location: d, successRedirect: g, platformType: h } = t,
        [m, p] = i.useState(""),
        [f, b] = i.useState(null),
        [S, k] = i.useState(!1),
        x = s.A.get(h)?.name ?? u.intl.string(u.t["bU/GZm"]);
    async function y() {
        k(!0), b(null);
        try {
            let t = await (0, c.d)(h, { location: d, successRedirect: g, handle: m });
            if (null == t) throw Error();
            a();
        } catch {
            b(u.intl.string(u.t["7wbPNl"])), k(!1);
        }
    }
    let C =
            h === o.fg2.MASTODON
                ? "@example@mastodon.social"
                : h === o.fg2.BLUESKY
                  ? "example.bsky.social"
                  : "clyde@example.com",
        T =
            (h === o.fg2.MASTODON && /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(m),
            /^.+\.[^.@]{2,}$/.test(m));
    return (0, n.jsx)(l.Modal, {
        transitionState: e,
        title: u.intl.formatToPlainString(u.t["ImMhq+"], { serviceName: x }),
        subtitle: u.intl.formatToPlainString(u.t["7TByKh"], { serviceName: x }),
        onClose: a,
        actions: [
            { variant: "secondary", text: u.intl.string(u.t["ETE/oC"]), onClick: a },
            { variant: "primary", text: u.intl.string(u.t.PDTjLN), onClick: y, loading: S, disabled: !T },
        ],
        children: (0, n.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), T && !S && y();
            },
            children: (0, n.jsx)(r.k, {
                label: u.intl.string(u.t.tZ9QFR),
                error: f,
                onChange: p,
                placeholder: C,
                value: m,
                disabled: S,
                autoFocus: !0,
            }),
        }),
    });
}
