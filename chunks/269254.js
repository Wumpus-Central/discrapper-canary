i.d(n, { default: () => S });
var e = i(200651);
i(192379);
var l = i(828214),
    a = i(481060),
    r = i(239091),
    o = i(299206),
    s = i(519110),
    u = i(695346),
    c = i(572004),
    d = i(691251),
    g = i(388032);
function S(t) {
    let { target: n, onSelect: i } = t,
        S = n.getAttribute('data-type'),
        b = n.getAttribute('data-id'),
        E = n.getAttribute('data-name'),
        v = n.getAttribute('data-surrogates'),
        p = 'true' === n.getAttribute('data-animated'),
        I = u.Sb.useSetting(),
        f = (0, s.Z)({
            type: S,
            id: b,
            name: E,
            isInExpressionPicker: !0
        }),
        h =
            null != v
                ? (0, e.jsx)(l.sN, {
                      id: 'copy',
                      label: g.intl.string(g.t.ad58UF),
                      action: () => (0, c.JG)(v)
                  })
                : null,
        j = (0, o.Z)({
            id: b,
            shiftId:
                S === d.S.EMOJI
                    ? '<'
                          .concat(p ? 'a' : '', ':')
                          .concat(null == E ? void 0 : E.split('~')[0], ':')
                          .concat(b, '>')
                    : void 0,
            label: S === d.S.STICKER ? g.intl.string(g.t['SJ324+']) : g.intl.string(g.t.Ap2oV1)
        });
    return (0, e.jsx)(a.v2r, {
        navId: 'expression-picker',
        onClose: r.Zy,
        'aria-label': g.intl.string(g.t.XoasSE),
        onSelect: i,
        className: 'context-menu',
        children: (0, e.jsxs)(a.kSQ, {
            children: [f, c.wS && I ? (null != h ? h : j) : null]
        })
    });
}
