e.exports = function () {
    var e = this,
        t = n(562255),
        r = e.element;
    (e.eventHandler = n(925965).bind(e)), t(r, 'keypress', e.eventHandler), t(r, 'keydown', e.eventHandler), t(r, 'keyup', e.eventHandler);
};
