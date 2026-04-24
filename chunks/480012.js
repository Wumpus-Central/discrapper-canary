a.d(n, { A: () => t });
function t(e) {
    let n = null != e.call ? e.call.duration : null;
    return null != n ? n.humanize() : null;
}
