n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(547972),
    a = n(326528);
function u() {
    let e = (0, a.b)().map((e) =>
        (0, r.jsx)(
            i.MenuItem,
            {
                id: e.id,
                label: e.title,
                action: () => (0, l.Z)(e.id)
            },
            e.id
        )
    );
    return (0, r.jsx)(r.Fragment, { children: e });
}
