n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(603592),
    a = n(388032);
let o = 'DOWNLOAD_APPS';
function s() {
    let e = (0, l.s9z)((e) => (0, l.DEQ)(e, o));
    return (0, i.jsx)(r.Z, {
        id: 'app-download-button',
        onClick: () => {
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                    return (t) =>
                        (0, i.jsx)(e, {
                            source: 'Guilds',
                            ...t
                        });
                },
                { modalKey: o }
            );
        },
        selected: e,
        tooltip: a.intl.string(a.t.Z7jwrK),
        icon: l._8t
    });
}
