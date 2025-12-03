n.d(t, {
    J: () => s,
    M: () => l,
});
var r = n(473749),
    i = n(433517),
    a = n(865066);
let o = "systemServiceAutoInstall";
function s() {
    i.K.set(o, !0);
}
function l() {
    r.useEffect(() => {
        null == i.K.get(o) && (s(), (0, a.sU)("first-start", !1));
    }, []);
}
