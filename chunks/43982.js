n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    a = n(392711),
    s = n.n(a),
    o = n(970731),
    c = n(981631),
    d = n(388032),
    u = n(601839),
    h = n(480032),
    p = n(699352);
let m = null;
function f(e) {
    let { onDismiss: t, onAccept: n, popoutPosition: l, gameConsoleAccounts: a } = e;
    r()(a.length > 0, 'Rendering ConsoleNUXTooltip without a game console account'), (null == m || null == a.find((e) => e.type === m)) && (m = s().shuffle(a)[0].type);
    let f = null,
        g = null;
    switch (m) {
        case c.ABu.XBOX:
            (f = d.intl.string(d.t.soeJqK)), (g = p);
            break;
        case c.ABu.PLAYSTATION:
        case c.ABu.PLAYSTATION_STAGING:
            (f = d.intl.string(d.t.o8gjmJ)), (g = h);
    }
    return (0, i.jsx)(o.ZP, {
        header: d.intl.string(d.t.ZagEMT),
        content: f,
        asset: (0, i.jsx)('img', {
            src: g,
            alt: '',
            className: u.art
        }),
        onClick: n,
        onSecondaryClick: t,
        markAsDismissed: t,
        buttonCTA: d.intl.string(d.t.HYgaeX),
        secondaryButtonCTA: d.intl.string(d.t.SlM9wc),
        caretPosition: 'top' === l ? o.DF.BOTTOM_LEFT : o.DF.TOP_LEFT
    });
}
