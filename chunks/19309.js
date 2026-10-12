n.d(l, { A: () => t });
function t(e) {
    let l = e?.getBoundingClientRect();
    return null == l ? null : { x: l.left, y: l.top };
}
