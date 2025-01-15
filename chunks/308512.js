n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(223245),
    u = n(246946),
    o = n(388032);
function c() {
    let e = (0, i.e7)([u.Z], () => u.Z.enabled, []);
    return (0, r.jsx)(l.MenuCheckboxItem, {
        id: 'streamer-mode-toggle',
        label: o.intl.string(o.t.p9ZAJS),
        action: () => {
            a.Z.setEnabled(!e);
        },
        checked: e
    });
}
