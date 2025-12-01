r.d(t, { R: () => n });
let n = (e) => {
    let t = !1;
    return (r) => {
        t || (e(r), (t = !0));
    };
};
