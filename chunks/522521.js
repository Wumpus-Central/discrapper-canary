a.d(e, { s: () => n });
var r = a(622916);
let n = (0, a(151122)._I)((t = {}) => {
    let e = {
        debugger: !1,
        stringify: !1,
        ...t
    };
    return {
        name: 'Debug',
        setup(t) {
            t.on('beforeSendEvent', (t, a) => {
                e.debugger,
                    (0, r.Cf)(() => {
                        e.stringify ? (console.log(JSON.stringify(t, null, 2)), a && Object.keys(a).length && console.log(JSON.stringify(a, null, 2))) : (console.log(t), a && Object.keys(a).length && console.log(a));
                    });
            });
        }
    };
});
