var r = n(164636),
    l = n(287809),
    u = n(695515);
n.d(
    e,
    {},
    {
        k: function () {
            return (0, r.bG)([u.A], () => u.A.getSelectedTeenId());
        },
        x: function () {
            let t = (0, r.bG)([u.A], () => u.A.getSelectedTeenId());
            return (0, r.bG)([l.default], () => (null !== t ? l.default.getUser(t) : void 0));
        },
    },
);
