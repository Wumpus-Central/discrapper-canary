n.d(t, { N: () => i });
let a = null;
function i() {
    if (null == a)
        try {
            a = new AudioContext();
        } catch (e) {}
    return a;
}
