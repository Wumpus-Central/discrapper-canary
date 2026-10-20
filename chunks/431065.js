function i(e) {
    return e;
}
function r(e, t) {
    return globalThis[e];
}
n.d(t, { K: () => a });
let a = {
    asIterable: function (e) {
        return e;
    },
    Array: i,
    Map: i,
    Set: i,
    WeakMap: i,
    WeakSet: i,
    Function: i,
    Event: i,
    NavigateEvent: i,
    NavigationDestination: i,
    URL: i,
    EventTarget: i,
    MessageEvent: i,
    PageTransitionEvent: i,
    MessageChannel: i,
    MessagePort: i,
    Document: i,
    DocumentFragment: i,
    HTMLTemplateElement: i,
    DOMParser: i,
    Node: i,
    HTMLElement: i,
    Element: i,
    Attr: i,
    NodeList: i,
    Blob: i,
    String: i,
    HTMLMediaElement: i,
    MediaStream: i,
    AudioNode: i,
    BaseAudioContext: i,
    OfflineAudioContext: i,
    GainNode: i,
    AudioParam: i,
    AnalyserNode: i,
    Window: i,
    Object: r("Object", [
        "defineProperty",
        "getOwnPropertyDescriptor",
        "getOwnPropertyNames",
        "getPrototypeOf",
        "keys",
        "setPrototypeOf",
    ]),
    Math: r("Math", ["abs"]),
    Reflect: r("Reflect", ["construct", "defineProperty", "get"]),
    Symbol: r("Symbol", ["asyncIterator", "iterator"]),
    Crypto: r("crypto", ["getRandomValues"]),
    Constructor: globalThis,
};
