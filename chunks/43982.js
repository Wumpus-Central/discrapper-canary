n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(512722),
    l = n.n(i),
    o = n(392711),
    a = n.n(o),
    s = n(970731),
    c = n(981631),
    u = n(388032),
    d = n(203867),
    p = n(480032),
    h = n(699352);
let f = null;
function m(e) {
    let { onDismiss: t, onAccept: n, popoutPosition: i, gameConsoleAccounts: o } = e;
    l()(o.length > 0, 'Rendering ConsoleNUXTooltip without a game console account'), (null == f || null == o.find((e) => e.type === f)) && (f = a().shuffle(o)[0].type);
    let m = null,
        g = null;
    switch (f) {
        case c.ABu.XBOX:
            (m = u.NW.string(u.t.soeJqK)), (g = h);
            break;
        case c.ABu.PLAYSTATION:
        case c.ABu.PLAYSTATION_STAGING:
            (m = u.NW.string(u.t.o8gjmJ)), (g = p);
    }
    return (0, r.jsx)(s.ZP, {
        header: u.NW.string(u.t.ZagEMT),
        content: m,
        asset: (0, r.jsx)('img', {
            src: g,
            alt: '',
            className: d.art
        }),
        onClick: n,
        onSecondaryClick: t,
        markAsDismissed: t,
        buttonCTA: u.NW.string(u.t.HYgaeX),
        secondaryButtonCTA: u.NW.string(u.t.SlM9wc),
        caretPosition: 'top' === i ? s.DF.BOTTOM_LEFT : s.DF.TOP_LEFT
    });
}
