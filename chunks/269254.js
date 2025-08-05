(i.d(e, { default: () => b }), i(35282));
var n = i(255367);
i(73800);
var a = i(828214),
    s = i(481060),
    l = i(239091),
    r = i(299206),
    c = i(519110),
    u = i(695346),
    d = i(572004),
    o = i(691251),
    p = i(388032);
function b(t) {
    let { target: e, onSelect: i } = t,
        b = e.getAttribute('data-type'),
        g = e.getAttribute('data-id'),
        S = e.getAttribute('data-name'),
        h = e.getAttribute('data-surrogates'),
        k = 'true' === e.getAttribute('data-animated'),
        v = u.Sb.useSetting(),
        x = (0, c.Z)({
            type: b,
            id: g,
            name: S,
            isInExpressionPicker: !0
        }),
        A =
            null != h
                ? (0, n.jsx)(a.sN, {
                      id: 'copy',
                      label: p.intl.string(p.t.ad58UF),
                      action: () => (0, d.JG)(h)
                  })
                : null,
        I = (0, r.Z)({
            id: g,
            shiftId:
                b === o.S.EMOJI
                    ? '<'
                          .concat(k ? 'a' : '', ':')
                          .concat(null == S ? void 0 : S.split('~')[0], ':')
                          .concat(g, '>')
                    : void 0,
            label: b === o.S.STICKER ? p.intl.string(p.t['SJ324+']) : p.intl.string(p.t.Ap2oV1)
        });
    return (0, n.jsx)(s.v2r, {
        navId: 'expression-picker',
        onClose: l.Zy,
        'aria-label': p.intl.string(p.t.XoasSE),
        onSelect: i,
        className: 'context-menu',
        children: (0, n.jsxs)(s.kSQ, {
            children: [x, d.wS && v ? (null != A ? A : I) : null]
        })
    });
}
