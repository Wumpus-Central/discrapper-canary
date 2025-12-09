n.d(t, { N: () => r });
let a = null;
function r() {
    if (null == a)
        try {
            a = new AudioContext();
        } catch (e) {}
    return a;
}
