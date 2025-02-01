e.exports = function () {
    var e = this,
        t = n(562255),
        i = e.element;
    (e.eventHandler = n(925965).bind(e)), t(i, 'keypress', e.eventHandler), t(i, 'keydown', e.eventHandler), t(i, 'keyup', e.eventHandler);
};
