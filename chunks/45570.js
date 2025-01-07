n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(547972),
    a = n(326528);
function l() {
    let e = (0, a.b)().map((e) =>
        (0, i.jsx)(
            o.MenuItem,
            {
                id: e.id,
                label: e.title,
                action: () => (0, r.Z)(e.id)
            },
            e.id
        )
    );
    return (0, i.jsx)(i.Fragment, { children: e });
}
