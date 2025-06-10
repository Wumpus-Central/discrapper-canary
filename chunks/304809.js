n.d(t, { N: () => r });
let i = null;
function r() {
    if (null == i)
        try {
            i = new AudioContext();
        } catch (e) {}
    return i;
}
