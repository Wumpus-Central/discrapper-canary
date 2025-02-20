n.d(e, { default: () => p }), n(301563);
var r = n(200651);
n(192379);
var i = n(828214),
    o = n(481060),
    l = n(239091),
    a = n(299206),
    c = n(519110),
    u = n(695346),
    s = n(572004),
    b = n(691251),
    d = n(388032);
function p(t) {
    let { target: e, onSelect: n } = t,
        p = e.getAttribute('data-type'),
        g = e.getAttribute('data-id'),
        f = e.getAttribute('data-name'),
        O = e.getAttribute('data-surrogates'),
        y = 'true' === e.getAttribute('data-animated'),
        j = u.Sb.useSetting(),
        S = (0, c.Z)({
            type: p,
            id: g,
            name: f,
            isInExpressionPicker: !0
        }),
        v =
            null != O
                ? (0, r.jsx)(i.sN, {
                      id: 'copy',
                      label: d.NW.string(d.t.ad58UF),
                      action: () => (0, s.JG)(O)
                  })
                : null,
        E = (0, a.Z)({
            id: g,
            shiftId:
                p === b.S.EMOJI
                    ? '<'
                          .concat(y ? 'a' : '', ':')
                          .concat(null == f ? void 0 : f.split('~')[0], ':')
                          .concat(g, '>')
                    : void 0,
            label: p === b.S.STICKER ? d.NW.string(d.t['SJ324+']) : d.NW.string(d.t.Ap2oV1)
        });
    return (0, r.jsx)(o.v2r, {
        navId: 'expression-picker',
        onClose: l.Zy,
        'aria-label': d.NW.string(d.t.XoasSE),
        onSelect: n,
        className: 'context-menu',
        children: (0, r.jsxs)(o.kSQ, {
            children: [S, s.wS && j ? (null != v ? v : E) : null]
        })
    });
}
