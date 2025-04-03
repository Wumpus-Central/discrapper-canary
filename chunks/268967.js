n.d(t, { Z: () => r });
let r = Object.freeze({
    'voice-conversations': {
        popoutOffset: {
            x: 45,
            y: 0
        }
    },
    'writing-messages': {
        prerequisites: ['voice-conversations'],
        popoutOffset: {
            x: -36,
            y: 0
        }
    },
    'direct-messages': {
        popoutOffset: {
            x: 50,
            y: 0
        }
    },
    'create-first-server': {
        popoutOffset: {
            x: 45,
            y: 0
        }
    },
    'organize-by-topic': {
        popoutOffset: {
            x: 50,
            y: 0
        }
    },
    'instant-invite': {
        prerequisites: ['organize-by-topic'],
        popoutOffset: {
            x: -10,
            y: 0
        }
    },
    'whos-online': {
        prerequisites: ['instant-invite'],
        popoutOffset: {
            x: -50,
            y: 0
        }
    },
    'server-settings': {
        prerequisites: ['instant-invite'],
        popoutOffset: {
            y: 32,
            x: 0
        }
    },
    'friends-list': {
        prerequisites: ['instant-invite'],
        popoutOffset: {
            x: 45,
            y: 0
        }
    },
    'create-more-servers': {
        prerequisites: ['server-settings'],
        popoutOffset: {
            x: 45,
            y: 0
        }
    }
});
