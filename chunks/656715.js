var a = r(910974),
    n = r(192379),
    o = r(639519),
    s = r.n(o),
    i = function (e) {
        var t = e.styling,
            r = e.arrowStyle,
            o = e.expanded,
            s = e.nodeType,
            i = e.onClick;
        return n.createElement('div', (0, a.Z)({}, t('arrowContainer', r), { onClick: i }), n.createElement('div', t(['arrow', 'arrowSign'], s, o, r), '\u25B6', 'double' === r && n.createElement('div', t(['arrowSign', 'arrowSignInner']), '\u25B6')));
    };
(i.propTypes = {
    styling: s().func.isRequired,
    arrowStyle: s().oneOf(['single', 'double']),
    expanded: s().bool.isRequired,
    nodeType: s().string.isRequired,
    onClick: s().func.isRequired
}),
    (i.defaultProps = { arrowStyle: 'single' }),
    (t.Z = i);
