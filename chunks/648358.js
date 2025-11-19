n.d(t, {
    J: () => l,
    M: () => c,
});
var r = n(473749),
    i = n(433517),
    a = n(765504),
    o = n(865066);
let s = "systemServiceAutoInstall";
function l() {
    i.K.set(s, !0);
}
function c() {
    let { installStartup: e } = a.Z.useConfig({ location: "useSystemServiceAutoInstall" });
    r.useEffect(() => {
        e && null == i.K.get(s) && (l(), (0, o.sU)("first-start", !1));
    }, [e]);
}
