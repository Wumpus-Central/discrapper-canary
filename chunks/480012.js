n.d(e, { A: () => i });
function i(t) {
    let e = null != t.call ? t.call.duration : null;
    return null != e ? e.humanize() : null;
}
