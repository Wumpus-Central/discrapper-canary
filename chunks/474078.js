n.d(t, { A: () => r });
let i = /\r\n|[\r\n]/g;
function r(e, t) {
    return ((e = e.replace(i, " ")), t && (e = e.trim()), e);
}
