n.d(t, { v: () => l });
let a = null;
function l() {
    if (null == a)
        try {
            a = new AudioContext();
        } catch (e) {}
    return a;
}
