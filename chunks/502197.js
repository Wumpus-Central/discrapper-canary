n.d(t, {
    K: () => r,
});

function r(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null;
}
