n.d(t, { t: () => i });
function i(...e) {
    return (...t) => {
        for (let n of e) 'function' == typeof n && n(...t);
    };
}
