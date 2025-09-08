n.d(t, { o: () => a });
var r = n(594174),
    i = n(465493);
let a = (e) => {
    let t = r.default.getCurrentUser();
    return !(null != t && t.isStaff()) && !i.Z.getCurrentConfig(e).enabled;
};
