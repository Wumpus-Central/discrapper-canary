n.d(t, { o: () => o });
var r = n(594174),
    i = n(603077);
let o = (e) => {
    let t = r.default.getCurrentUser();
    return !(null != t && t.isStaff()) && !i.Z.getCurrentConfig(e).enabled;
};
