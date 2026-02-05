n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(287809),
    a = n(593028),
    o = n(926966),
    E = n(985018);
function c() {
    let e = (0, l.bG)([a.A], () => a.A.getPendingOfferForCurrentUser()),
        t = (0, l.bG)([s.default], () => (null == e ? null : s.default.getUser(e.senderId)));
    if (null == e) return null;
    let c = t?.globalName ?? t?.username ?? E.intl.string(o.default["7B17YX"]),
        _ = `${E.intl.formatToPlainString(o.default["1NhwSo"], { username: c })}: ${e.prompt}`;
    return (0, i.jsxs)(r.$Td, {
        color: r.Hv$.BRAND,
        children: [
            (0, i.jsx)(r.Text, { variant: "text-sm/medium", color: "currentColor", tag: "span", children: _ }),
            (0, i.jsx)(r.zr9, {
                onClick: () => {
                    (0, r.mMO)(async () => {
                        let { default: l } = await n.e("839").then(n.bind(n, 894106));
                        return (n) => (0, i.jsx)(l, { ...n, offer: e, sender: t ?? null });
                    });
                },
                children: E.intl.string(o.default.BoNO3H),
            }),
        ],
    });
}
