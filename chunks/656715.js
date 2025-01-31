r.d(t, { Z: () => c });
var a = r(910974),
    n = r(192379),
    s = r(639519),
    o = r.n(s),
    i = function (e) {
        var t = e.styling,
            r = e.arrowStyle,
            s = e.expanded,
            o = e.nodeType,
            i = e.onClick;
        return n.createElement('div', (0, a.Z)({}, t('arrowContainer', r), { onClick: i }), n.createElement('div', t(['arrow', 'arrowSign'], o, s, r), '\u25B6', 'double' === r && n.createElement('div', t(['arrowSign', 'arrowSignInner']), '\u25B6')));
    };
(i.propTypes = {
    styling: o().func.isRequired,
    arrowStyle: o().oneOf(['single', 'double']),
    expanded: o().bool.isRequired,
    nodeType: o().string.isRequired,
    onClick: o().func.isRequired
}),
    (i.defaultProps = { arrowStyle: 'single' });
let c = i;
