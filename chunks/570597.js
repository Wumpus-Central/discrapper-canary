var t = n(792996);
n.d(
    e,
    {},
    {
        X: function (l, e) {
            let n = e ?? l.length;
            return 0 === n
                ? ""
                : 1 === n
                  ? t.intl.formatToPlainString(t.t["8s9z8P"], { first: l[0] })
                  : 2 === n
                    ? t.intl.formatToPlainString(t.t["i0K/dw"], { first: l[0], second: l[1] })
                    : 3 === n
                      ? t.intl.formatToPlainString(t.t["/KSOKY"], { first: l[0], second: l[1], third: l[2] })
                      : t.intl.formatToPlainString(t.t.xpU76u, {
                            first: l[0],
                            second: l[1],
                            third: l[2],
                            count: n - 3,
                        });
        },
    },
);
