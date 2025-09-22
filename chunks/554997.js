function r(...e) {
    return 1 === e.length && e[0]
        ? e[0]
        : (t) => {
              for (let n of e) "function" == typeof n ? n(t) : null != n && (n.current = t);
          };
}
n.d(t, { l: () => r });
