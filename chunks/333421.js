let l = RegExp("^dev://devtools/([-\\w._0-9]+)(/([-\\w._0-9]+))?$", "i");
t.d(
    n,
    {},
    {
        AG: function (e) {
            let n = e.match(l);
            return null == n || null == n[1] ? null : n[1];
        },
        my: function (e) {
            return l.test(e);
        },
        uJ: function (e) {
            let n = e.match(l);
            return null == n ? null : (n[3] ?? null);
        },
    },
);
