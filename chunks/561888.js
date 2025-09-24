function r(...e) {
    return (...t) => {
        for (let n of e) "function" == typeof n && n(...t);
    };
}
n.d(t, { t: () => r });
