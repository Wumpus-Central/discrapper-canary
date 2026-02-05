n.d(t, { v: () => s });
let a = null;
function s() {
    if (null == a)
        try {
            a = new AudioContext();
        } catch (e) {}
    return a;
}
